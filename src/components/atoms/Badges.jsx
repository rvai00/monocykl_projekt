export const Badges = (props) => {
  console.log(props.badges)

    return <div> {props.badges?.map(badge => <div>{badge}</div> )}</div>
  }