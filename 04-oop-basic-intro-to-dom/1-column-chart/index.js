export default class ColumnChart {
  element;
  chartHeight = 50;

  constructor(
    {
      data = [],
      label = '',
      value = 0,
      link = '',
      formatHeading = value => value
    } = {}) {

    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.formatHeading = formatHeading;

    this.element = this.createElement(this.createTemplate());
  }

  createChartClasses() {
    return this.data.length ? 'column-chart' : 'column-chart column-chart_loading';
  }

  createTemplate() {
    return (`
      <div class="${this.createChartClasses()}" style="--chart-height: 50">
      <div class="column-chart__title">
        ${this.label}
        ${this.createLinkTemplate(this.link)}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.createChartBodyTemplate()}
        </div>
      </div>
    </div>`);
  }

  createLinkTemplate(link) {
    if (link) {
      return (`
        <a href="${link}" class="column-chart__link">View all</a>`);
    }

    return '';
  }

  createChartBodyTemplate() {
    return this.getColumnProps().map(item => (
      `<div style="--value: ${item.value}" data-tooltip="${item.percent}"></div>`
    )).join('');
  }

  createElement(template) {
    const element = document.createElement('div');
    element.innerHTML = template;

    return element.firstElementChild;
  }

  getColumnProps() {
    const maxValue = Math.max(...this.data);
    const scale = 50 / maxValue;

    return this.data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }

  update(newData) {
    this.data = newData;
    this.element.querySelector('[data-element="body"]').innerHTML = this.createChartBodyTemplate();
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
  }
}
