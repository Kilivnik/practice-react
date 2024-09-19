export const SearchBox = () => {
    return (
      <form autoComplete="off">
        <input
          type="text"
          name="value"
          placeholder="A state, emotion, thought..."
        />
        <button type="submit">Search</button>
      </form>
    );
}