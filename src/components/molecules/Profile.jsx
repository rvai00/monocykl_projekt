import {Name} from  "../atoms/Name"
import { Badges} from "../atoms/Badges"

export const Profile = (props) => {
    return <div>
      <Name name={props.user.name}/> 
    <Badges badges={props.user.badges}/></div>
  }
