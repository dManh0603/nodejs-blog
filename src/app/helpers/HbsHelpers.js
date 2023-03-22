// helpers.js
const helpers = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : 'default';
  
      const icons = {
        default: 'fa-sort',
        asc: 'fa-arrow-down-short-wide',
        desc: 'fa-arrow-down-wide-short',
      };
  
      const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc',
      }
      const type = types[sortType];
      const icon = icons[sortType];
  
      return `<a href="?_sort&column=${field}&type=${type}">
        <i class="fa-solid ${icon} ms-2"></i>
      </a>`
    }
  };
  
  module.exports = helpers;
  