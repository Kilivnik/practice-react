
import { Logo } from "../Logo/Logo"
import { SearchBox } from "../SearchBox/SearchBox";
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { UserMenu } from "../UserMenu";
import { PsychologistMenu } from "../PsychologistMenu";
import { FindSpecialist } from "../FindSpecialist";
import {FilterQuestions} from "../FilterQuestions"
import { OurSpecialists } from "../OurSpecialists";
import {SpecialistCard} from "../SpecialistCard/SpecialistCard"

const user = {
  avatarURL: "../images/svg/profile.svg",
};

const specialist = {
  img: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.1.1777442956.1726489384&semt=ais_hybrid',
  name: 'Mykhailo',
  surname: 'Druzkovskyi',
  type: 'psychologist',
  status: 'online',
  experience: 2,
  practice: 2000,
  reviews: 34,
  requests: [
    'Difficulties in relationships',
    'Fears and phobias',
    'Child-parent relations',
    'Conflicts at work',
  ],
  price: 30,
  description:
    "I love my work and believe in what I do. I always work for the client, the client's personality is important in my work, and only then the symptom or diagnosis. I work with a wide range of requests. I guarantee it at work!",
};

export const AppBar = () => {
    return (
      <header>
        <Logo text="Therapy Market" />
        <SearchBox />
        <HeaderNav />
        <PsychologistMenu />
        <UserMenu avatar={user.avatarURL} />
        <FindSpecialist />
        <FilterQuestions />
        <OurSpecialists />
        <SpecialistCard
          img={specialist.img}
          name={specialist.name}
          surname={specialist.surname}
          type={specialist.type}
          status={specialist.status}
          experience={specialist.experience}
          practice={specialist.practice}
          reviews={specialist.reviews}
          requests={specialist.requests}
          price={specialist.price}
          description={specialist.description}
        />
      </header>
    );
}