import React from 'react';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import CodeIcon from '@material-ui/icons/Code';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LanguageIcon from '@material-ui/icons/Language';
import AddIcon from '@material-ui/icons/Add';

const SketchpadSidebar =  () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Services</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'webhooks')} draggable>
        <LanguageIcon fontSize="large" className="icon webhook" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'spotifys')} draggable>
        <QueueMusicIcon fontSize="large" className="icon spotify" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'telegrams')} draggable>
        <TelegramIcon fontSize="large" className="icon telegram" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'sshs')} draggable>
        <CodeIcon fontSize="large" className="icon ssh" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'githubs')} draggable>
        <GitHubIcon fontSize="large" className="icon github" />
      </div>

      <Divider />
      <div className="description">Flows</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'add')} draggable>
        <AddIcon fontSize="large" className="icon" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'add')} draggable>
        <AddIcon fontSize="large" className="icon" />
      </div>
    </aside>
  );
};

export default SketchpadSidebar;