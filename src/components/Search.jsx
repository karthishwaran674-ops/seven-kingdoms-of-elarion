import { useMemo, useState } from 'react';

function Search({ items, renderItem, placeholder = 'Search the realm...' }) {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!query) return items;
    const lowered = query.toLowerCase();
    return items.filter((item) => JSON.stringify(item).toLowerCase().includes(lowered));
  }, [items, query]);

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm text-slate-400">Search</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-slate-100 outline-none"
        />
      </label>
      <div className="space-y-3">
        {filteredItems.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}

export default Search;
