export const FindSpecialist = () => {
  return (
    <div>
      <h1>Find Your Personal Specialist</h1>
      <form autoComplete="off">
        <input
          type="text"
          name="value"
          placeholder="A state, emotion, thought, or behavior...."
        />
        <button type="submit">Сhoose a psychologist</button>
      </form>
    </div>
  );
};