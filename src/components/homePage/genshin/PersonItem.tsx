import { PersonsList } from "./PersonData";

const PersonItem: React.FC = (): JSX.Element => {
   // ОНО РАБОТАЕТ!!!!!!!!!!!!!!!!!!!!
   function showPersonsInfo() {
      const personIcon: JSX.Element[] = [];
      for (let person in PersonsList) {
         personIcon.push(
            <tr>
               <td>
                  <img src={PersonsList[person].icon} alt="" />
               </td>
               <td>{PersonsList[person].name}</td>
               <td>{PersonsList[person].Rarity}</td>
               <td>{PersonsList[person].Element}</td>
               <td>{PersonsList[person].Weapon}</td>
            </tr>
         );
      }
      return personIcon;
   }
   // ОНО РАБОТАЕТ!!!!!!!!!!!!!!!!!!!!

   return (
      <table>
         <thead>
            <tr>
               <th>Icon</th>
               <th>Name</th>
               <th>Rarity</th>
               <th>Element</th>
               <th>Weapon</th>
            </tr>
         </thead>
         <tbody>{showPersonsInfo()}</tbody>
      </table>
   );
};

export default PersonItem;
