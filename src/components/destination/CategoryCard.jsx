import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  Landmark,
  Palmtree,
  Mountain,
  Trees,
  Sparkles,
  Building2,
  Flame
} from 'lucide-react';

const ICONS = {
  Compass,
  Landmark,
  Palmtree,
  Mountain,
  Trees,
  Sparkles,
  Building2,
  Flame
};

export function CategoryCard({ category, isSelected = false, onSelect }) {
  const navigate = useNavigate();
  const IconComponent = ICONS[category.icon] || Compass;

  const handleClick = () => {
    if (onSelect) {
      onSelect(category.id);
    } else {
      navigate(`/explore?category=${category.id === 'all' ? '' : category.id}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`category-pill-card ${isSelected ? 'selected' : ''}`}
      aria-label={`Filter by ${category.name}`}
    >
      <div className="category-pill-icon-box">
        <IconComponent size={20} />
      </div>
      <div className="category-pill-text">
        <span className="category-pill-name">{category.name}</span>
        {category.count !== undefined && (
          <span className="category-pill-count">{category.count} places</span>
        )}
      </div>
    </button>
  );
}
