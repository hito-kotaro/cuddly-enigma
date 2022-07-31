import { useRecoilState } from 'recoil';
import { UserAgentState } from './UserAgentState';

const useUserAgentState = () => {
  const [isSafari, setIsSafari] = useRecoilState(UserAgentState);

  const check = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('chrome') !== -1) {
      setIsSafari('h-screen');
    } else if (userAgent.indexOf('safari') !== -1) {
      setIsSafari('h-dvh');
    }
  };

  return { isSafari, setIsSafari, check };
};

export default useUserAgentState;
