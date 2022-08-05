export const AcordionItem = ({ id, children, title }) => {
  return (
    <div className="accordion-item col-12 ">
      <h2 className="accordion-header" id={'headingOne' + id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={'#collapseOne' + id}
          aria-expanded="true"
          aria-controls={'collapseOne' + id}
        >
          {title}
        </button>
      </h2>
      <div
        id={'collapseOne' + id}
        className="accordion-collapse collapse"
        aria-labelledby={'headingOne' + id}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">{children}</div>
      </div>
    </div>
  );
};
