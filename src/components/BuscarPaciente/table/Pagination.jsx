const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="2">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="23">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="4">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="3">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="2">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
