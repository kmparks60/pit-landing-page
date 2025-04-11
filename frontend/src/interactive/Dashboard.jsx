import React from 'react';
import { sampleInventory } from './data/sampleInventory';
import InventoryTable from './components/InventoryTable';
import NavBar from './components/NavBar';

const Dashboard = () => {
	return (
		<div id="demo" className="min-h-screen py-20 px-6 bg-[#f7f9fc]">
			<NavBar />
			<h2 className="text-4xl font-bold text-[#3b5787] mt-6 mb-6 text-center">Interactive Inventory Demo</h2>
			<InventoryTable inventory={sampleInventory} />
		</div>
	);
};

export default Dashboard;
