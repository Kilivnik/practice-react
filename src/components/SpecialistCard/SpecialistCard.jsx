// import Button from '../Button/Button';

// import HeartIcon from '../../assets/icons/heart.svg?react';
import css from './SpecialistCard.module.scss';

export const SpecialistCard = ({
  id,
  img,
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
  favourite,
}) => {
  return (
    <li className={css.specialistItem}>
      <img src={img} alt="userPhoto" />

      <div className={css.specialistCard}>
        <h3 className={css.specialistName}>
          {name} {surname}
        </h3>

        <div className={css.experienceBloc}>
          <div>
            <p className={css.specialistType}>{type}</p>
            <p className={css.specialistStatus}>{status}</p>
          </div>

          <div>
            <p className={css.specialistExperience}>
              {experience} years of experience
            </p>
            <p className={css.specialistPractice}>
              {practice} hours of practice
            </p>
          </div>
        </div>

        <p>reviews({reviews})</p>
      </div>

      <div className={css.descriptionBloc}>
        <h4>works with requests</h4>
        <p>{requests}</p>
        <p>{description}</p>
      </div>

      <p>$ {price} / for consultation</p>
      <p>favorite-{favourite}</p>
    </li>
  );
};


