interface Props {
  avatar: string;
  name: string;
  description: string;
}

export default function ProfileCard(props: Props) {
  const { avatar, name, description } = props;
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <img src={avatar} alt="User avatar"></img>
      <p>{description}</p>
    </div>
  );
}
