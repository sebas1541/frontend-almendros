import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
                <p className="text-sm text-gray-500">Manage your email notification preferences</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Security</label>
                <p className="text-sm text-gray-500">Update your password and security settings</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold mb-4">Business Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Hours</label>
                <p className="text-sm text-gray-500">Set your business operating hours</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <p className="text-sm text-gray-500">Update your business address and contact information</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold mb-4">System Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <p className="text-sm text-gray-500">Choose your preferred language</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Theme</label>
                <p className="text-sm text-gray-500">Customize the appearance of your portal</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;