import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../components/Layout';
import type { AdvancedSearchParams } from '../types';

export function Home() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [advancedParams, setAdvancedParams] = useState<AdvancedSearchParams>({
    paperId: '',
    paperName: '',
    paperAuthor: '',
    paperTopic: '',
    paperYear: '',
    publicationType: 'journal',
    field: '',
    keywords: [],
  });

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What paper do you want?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
              >
                Advanced Search
                {showAdvanced ? (
                  <ChevronUp className="inline-block ml-2" />
                ) : (
                  <ChevronDown className="inline-block ml-2" />
                )}
              </button>
            </div>

            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Paper ID"
                  value={advancedParams.paperId}
                  onChange={(e) =>
                    setAdvancedParams({ ...advancedParams, paperId: e.target.value })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Paper Name"
                  value={advancedParams.paperName}
                  onChange={(e) =>
                    setAdvancedParams({ ...advancedParams, paperName: e.target.value })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={advancedParams.paperAuthor}
                  onChange={(e) =>
                    setAdvancedParams({ ...advancedParams, paperAuthor: e.target.value })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Topic"
                  value={advancedParams.paperTopic}
                  onChange={(e) =>
                    setAdvancedParams({ ...advancedParams, paperTopic: e.target.value })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={advancedParams.paperYear}
                  onChange={(e) =>
                    setAdvancedParams({ ...advancedParams, paperYear: e.target.value })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <select
                  value={advancedParams.publicationType}
                  onChange={(e) =>
                    setAdvancedParams({
                      ...advancedParams,
                      publicationType: e.target.value as 'journal' | 'conference',
                    })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="journal">Journal</option>
                  <option value="conference">Conference</option>
                </select>
                <input
                  type="text"
                  placeholder="Field"
                  value={advancedParams.field}
                  onChange={(e) =>
                    setAdvancedParams({ ...advancedParams, field: e.target.value })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Keywords (comma-separated)"
                  value={advancedParams.keywords.join(', ')}
                  onChange={(e) =>
                    setAdvancedParams({
                      ...advancedParams,
                      keywords: e.target.value.split(',').map((k) => k.trim()),
                    })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            )}

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
              <Search className="inline-block mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}