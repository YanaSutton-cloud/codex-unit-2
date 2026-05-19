// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.
function getSummary() {
  return `${this.title} by ${this.author}, ${this.pages} pages.`;
}

const book = {
  title: "The Sisters of the APF",
  author: "Zane",
  pages: 288,

  summary: getSummary,
};

export default book;
