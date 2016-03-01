var utils = require('../utils');

module.exports = function resize_col_text(params, svg_group){
  svg_group
    .selectAll('.col_label_click')
    .select('text')
    .style('font-size', params.labels.default_fs_col + 'px')
    .text(function(d){ return utils.normal_name(d);});

  svg_group
    .selectAll('.col_label_click')
    .each(function() {
      d3.select(this)
        .select('text')[0][0]
        .getBBox();
    });  
};