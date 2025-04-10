import { motion } from 'framer-motion';

const services = [
  {
    title: 'Real-Time Inventory Tracking',
    description: 'Monitor stock across all locations and know exactly what you have and what you need—instantly.',
    icon: '📦',
  },
  {
    title: 'Vendor & Purchase Management',
    description: 'Track vendor relationships, purchase orders, and incoming inventory with ease.',
    icon: '🛒',
  },
  {
    title: 'Reporting & Low-Stock Alerts',
    description: 'Detailed reports and customizable alerts help prevent shortages and streamline restocking.',
    icon: '📊',
  },
  {
    title: 'Multi-User Roles & Access',
    description: 'Give team members the access they need with role-based permissions and secure logins.',
    icon: '👥',
  },
];

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      '1 User',
      '1 Location',
      'Basic Inventory Tracking',
      'Email Support',
    ],
  },
  {
    name: 'Professional',
    price: '$29/mo',
    features: [
      'Up to 5 Users',
      '3 Locations',
      'Vendor Management',
      'Low Stock Alerts',
      'Analytics Dashboard',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited Users & Locations',
      'All Features Included',
      'Custom Feature Integration',
      'White-Glove Setup',
      'Priority Support',
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6 text-[#3b5787]">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg text-[#2d466b]">
          Track smarter. Operate smoother. PIT gives you the tools to take control of your inventory, your way.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-[#f4f7fc] p-6 rounded-xl shadow-md border border-[#dce3f0]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-[#2d466b]">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
        <p className="text-md text-[#2d466b] mb-10">
          Whether you're just starting out or managing a large-scale operation, we've got a plan for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="bg-[#f4f7fc] p-6 rounded-xl shadow-lg border border-[#dce3f0] flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-xl text-[#ff9966] font-semibold mb-4">{tier.price}</p>
              <ul className="mb-6 text-left space-y-2 text-[#2d466b]">
                {tier.features.map((feature, i) => (
                  <li key={i}>✔️ {feature}</li>
                ))}
              </ul>
              <button className="mt-auto px-5 py-2 bg-[#3b5787] text-white rounded-md hover:bg-[#2d466b] transition duration-300">
                {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
