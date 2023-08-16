/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import '../../App.scss';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

type Props = {
  tabs: { id: string; title: string; content: string; }[];
  selectedTabId: string;
  onTabSelected: (param: {
    id: string;
    title: string;
    content: string }) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
              onClick={selectedTabId === tab.id
                ? () => null
                : () => onTabSelected(tab)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content || ''}
      </div>
    </div>
  );
};
