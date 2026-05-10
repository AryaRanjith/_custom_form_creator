function FormHeader() {

  return (

    <div className="form-header">

      <input
        type="text"
        placeholder="Form Title"
        className="form-title"
      />

      <textarea
        placeholder="Form Description"
        className="form-description"
      ></textarea>

    </div>

  );
}

export default FormHeader;