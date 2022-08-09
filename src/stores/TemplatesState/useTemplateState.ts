import { useRecoilState } from 'recoil';
import { templateStateType } from '../../types/Template/templatesStateType';
import { templateState } from './templatesState';

const useTemplateState = () => {
  const [templates, setTemplates] = useRecoilState(templateState);

  const open = (template: string) => {
    const newState: templateStateType = {
      home: template === 'home',
      detail: template === 'detail',
      list: template === 'list',
      request: template === 'request',
      approve: template === 'approve',
    };

    setTemplates(newState);
  };

  const closeDetail = () => {
    const newState: templateStateType = {
      home: true,
      detail: false,
      list: false,
      request: false,
      approve: false,
    };
    setTemplates(newState);
  };

  return { templates, closeDetail, open };
};

export default useTemplateState;
