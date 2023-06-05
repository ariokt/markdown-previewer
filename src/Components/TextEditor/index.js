const TextEditor = ({ data, setData }) => {
  return (
    <>
      <textarea
        className="w-8/12 block mx-auto mb-10"
        defaultValue={data}
        onChange={(e) => setData(e.target.value)}
        rows={20}
        id="editor"
      />
    </>
  );
};

export default TextEditor;
