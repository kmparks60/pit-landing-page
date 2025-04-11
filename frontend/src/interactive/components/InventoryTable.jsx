import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { sampleInventory } from '../data/sampleInventory';

const InventoryTable = () => {
	const [products, setProducts] = useState([]);
	const [skuInput, setSkuInput] = useState('');

	useEffect(() => {
	const updated = sampleInventory.map(product => {
		const actualStock = Math.max(0, product.quantity - product.reserved);
		const status =
		actualStock === 0
			? 'Out of Stock'
			: actualStock < product.lowStockThreshold
			? 'Low Stock'
			: 'In Stock';
		return { ...product, actualStock, status };
	});
	setProducts(updated);
	}, []);

	const handleQuantityChange = (id, field, change) => {
	setProducts(prev =>
		prev.map(product => {
		if (product.id === id) {
			const newValue = Math.max(0, product[field] + change);
			const actualStock =
			field === 'quantity'
				? Math.max(0, newValue - product.reserved)
				: Math.max(0, product.quantity - newValue);

			const status =
			actualStock === 0
				? 'Out of Stock'
				: actualStock < product.lowStockThreshold
				? 'Low Stock'
				: 'In Stock';

			return {
			...product,
			[field]: newValue,
			actualStock,
			status,
			};
		}
		return product;
		})
	);
	};

	const handleManualChange = (id, field, value) => {
	const cleanValue = value === '' ? '' : Math.max(0, parseInt(value) || 0);
	setProducts(prev =>
		prev.map(product => {
		if (product.id === id) {
			const actualStock =
			field === 'quantity'
				? Math.max(0, cleanValue - product.reserved)
				: Math.max(0, product.quantity - cleanValue);

			const status =
			actualStock === 0
				? 'Out of Stock'
				: actualStock < product.lowStockThreshold
				? 'Low Stock'
				: 'In Stock';

			return {
			...product,
			[field]: cleanValue,
			actualStock,
			status,
			};
		}
		return product;
		})
	);
	};

	const handleLocationChange = (id, location) => {
	setProducts(prev =>
		prev.map(product =>
		product.id === id ? { ...product, location } : product
		)
	);
	};

	const handleSkuInputChange = (e) => {
	setSkuInput(e.target.value);
	};

	const getStatusColor = (status) => {
	return status === 'In Stock'
		? 'text-green-600'
		: status === 'Low Stock'
		? 'text-yellow-500'
		: 'text-red-600';
	};

	const exportToXLS = () => {
	const worksheetData = products.map(product => ({
		'Product ID': product.id,
		'Product Name': product.name,
		'Barcode': `${product.barcode}`,
		'On the Shelf': product.quantity,
		'Reserved': product.reserved,
		'Actual Stock': product.actualStock,
		'Threshold': product.lowStockThreshold,
		'Unit Price': `$${product.unitPrice.toFixed(2)}`,
		'Weight (lbs)': product.weight,
		'Warehouse': product.location,
		'Status': product.status,
	}));

	const ws = XLSX.utils.json_to_sheet(worksheetData);
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, 'Inventory');

	ws['!cols'] = [
		{ wch: 12 }, { wch: 20 }, { wch: 18 }, { wch: 12 }, { wch: 10 },
		{ wch: 14 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 12 },
	];

	XLSX.writeFile(wb, 'inventory_report.xlsx');
	};

	const alerts = products.filter(
	product => product.status === 'Low Stock' || product.status === 'Out of Stock'
	);

	return (
	<div className="space-y-6">
		<div className="flex items-center justify-between">
		<div className="flex items-center space-x-4">
			<label className="font-bold" htmlFor="skuInput">
			Enter SKU:
			</label>
			<input
			type="text"
			id="skuInput"
			value={skuInput}
			onChange={handleSkuInputChange}
			className="border rounded px-2 py-1 w-48"
			/>
		</div>
		<button
			onClick={exportToXLS}
			className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
		>
			Export to Excel
		</button>
		</div>

		<div className="overflow-x-auto shadow-lg rounded-lg">
		<table className="min-w-full text-left bg-white">
			<thead className="bg-[#3b5787] text-white">
			<tr>
				<th className="px-4 py-3">Product ID</th>
				<th className="px-4 py-3">Name</th>
				<th className="px-4 py-3">Barcode</th>
				<th className="px-4 py-3">On the Shelf</th>
				<th className="px-4 py-3">Reserved</th>
				<th className="px-4 py-3">Actual Stock</th>
				<th className="px-4 py-3">Threshold</th>
				<th className="px-4 py-3">Unit Price</th>
				<th className="px-4 py-3">Weight (lbs)</th>
				<th className="px-4 py-3">Warehouse</th>
				<th className="px-4 py-3">Status</th>
			</tr>
			</thead>
			<tbody>
			{products.map(product => (
				<tr key={product.id} className="border-b hover:bg-gray-100">
				<td className="px-4 py-3">{product.id}</td>
				<td className="px-4 py-3">{product.name}</td>
				<td className="px-4 py-3">{product.barcode}</td>

				<td className="px-4 py-3 flex items-center gap-2">
					<button
					onClick={() => handleQuantityChange(product.id, 'quantity', -1)}
					className="px-2 py-1 bg-red-200 hover:bg-red-300 rounded text-sm"
					>
					−
					</button>
					<input
					type="number"
					min="0"
					value={product.quantity === '' ? '' : product.quantity}
					onChange={(e) =>
						handleManualChange(product.id, 'quantity', e.target.value)
					}
					className="w-16 text-center border rounded px-2 py-1"
					/>
					<button
					onClick={() => handleQuantityChange(product.id, 'quantity', 1)}
					className="px-2 py-1 bg-green-200 hover:bg-green-300 rounded text-sm"
					>
					+
					</button>
				</td>

				<td className="px-4 py-3">{product.reserved}</td>
				<td className="px-4 py-3">{product.actualStock}</td>
				<td className="px-4 py-3">{product.lowStockThreshold}</td>
				<td className="px-4 py-3">${product.unitPrice.toFixed(2)}</td>
				<td className="px-4 py-3">{product.weight}</td>

				<td className="px-4 py-3">
					<select
					value={product.location}
					onChange={(e) => handleLocationChange(product.id, e.target.value)}
					className="border rounded px-2 py-1"
					>
					<option>Warehouse A</option>
					<option>Warehouse B</option>
					<option>Warehouse C</option>
					</select>
				</td>

				<td className={`px-4 py-3 font-bold ${getStatusColor(product.status)}`}>
					{product.status}
				</td>
				</tr>
			))}
			</tbody>
		</table>
		</div>

		<div className="mt-6">
		<h2 className="text-lg font-bold mb-2">Alerts</h2>
		<div className="space-y-2">
			{alerts.map((alert) => (
			<div
				key={alert.id}
				className={`px-4 py-2 rounded-md text-white font-semibold shadow ${
				alert.status === 'Out of Stock' ? 'bg-red-600' : 'bg-yellow-500'
				}`}
			>
				{alert.name} is {alert.status}
			</div>
			))}
			{alerts.length === 0 && (
			<p className="text-gray-500 italic">No low stock or out-of-stock alerts.</p>
			)}
		</div>
		</div>
	</div>
	);
};

export default InventoryTable;
