import { TabPanel, TabView } from "primereact/tabview";
import ProjectInfo from "./ProjectInfo";

const ProjectOvervew = () => {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="Thông tin dự án">
          <ProjectInfo />
        </TabPanel>
        <TabPanel header="Thông tin liên hệ"></TabPanel>
      </TabView>
    </div>
  );
};
export default ProjectOvervew;
