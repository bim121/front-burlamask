import StartInformation from '../StartInformation/StartInformation';
import style from "./ContentStartPage.module.css";

const ContentStartPage = () => {
  return (
    <>
        <div className={style.content}>
          <StartInformation />
        </div>
    </>
  );
}

export default ContentStartPage;