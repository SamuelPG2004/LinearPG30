
import React from 'react';
import { LinearLogo } from '../constants';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Features',
      links: ['Plan', 'Build', 'Insights', 'Customer Requests', 'Linear Asks', 'Security'],
    },
    {
      title: 'Product',
      links: ['Method', 'Integrations', 'Changelog', 'Documentation', 'Download'],
    },
    {
      title: 'Company',
      links: ['About', 'Customers', 'Startups', 'Changelog', 'README', 'Quality'],
    },
    {
      title: 'Resources',
      links: ['Developers', 'Status', 'Report vulnerability', 'DPA', 'Privacy'],
    },
    {
      title: 'Connect',
      links: ['Contact us', 'X (Twitter)', 'GitHub', 'YouTube'],
    },
  ];

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <LinearLogo className="h-6 w-auto" />
            <p className="mt-4 text-sm text-gray-500">The system for modern product development.</p>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-sm text-gray-200">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
