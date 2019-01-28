import React from 'react';
import map from 'lodash/map';
import { recentSearches } from '../../../../models/recentSearches';

const RecentSearches = () => (
  <div className="article recent_searches">
    <h4 className="section_title">Recent Searches</h4>
    <div className="search_tag_area">
      {map(recentSearches, search => (
        <span className="tag">
          <a href={search.href}>{search.name}</a>
        </span>
      ))}
    </div>
  </div>
);

export default RecentSearches;
