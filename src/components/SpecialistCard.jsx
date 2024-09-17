export const SpecialistCard = ({
  name,
  surname,
  type,
  status,
  experience,
  practice,
  reviews,
  requests,
  price,
  description,
}) => {
  return (
    <div>
      <h3>
        {name} {surname}
      </h3>
      <p>{type}</p>
      <p>{status}</p>
      <p>{experience} years of experience</p>
      <p>{practice} hours of practice</p>
      <p>reviews({reviews})</p>
      <div>
        <h4>works with requests</h4>
        <p>{requests}</p>
      </div>
      <p>$ {price} / for consultation</p>
      <p>{description}</p>
    </div>
  );
};