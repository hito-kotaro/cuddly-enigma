import React, { useEffect } from 'react';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import Footer from '../../organisms/Footer/Footer';
import HomeHeader from '../../organisms/HomeHeader/HomeHeader';
import HomeTemplate from './templates/HomeTemplate';
import RequestTemplate from './templates/RequestTemplate';
import DetailTemplate from './templates/DetailTemplate';
import ListTemplate from './templates/ListTemplate';
import useHomePage from './hooks/useHomePage';
import useTemplateState from '../../../stores/TemplatesState/useTemplateState';
import useRequestApi from '../../../useApi/useRequestApi';
import useRequestListState from '../../../stores/Requests/useRequestListState';
import useUserApi from '../../../useApi/useUserApi';
import useApproveApi from '../../../useApi/useApproveApi';
import ApproveTemplate from './templates/ApproveTemplate';
import useApproveListState from '../../../stores/Approves/useApproveListState';
import ApproveDetailTemplate from './templates/ApproveDetailTemplate';
import useBankApi from '../../../useApi/useBankApi';
import UserUpdateTemplate from './templates/UserUpdateTemplate';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  const { templates } = useTemplateState();
  const { requestList } = useRequestListState();
  const { approveList } = useApproveListState();
  const { home, detail, request, list, approve, approveDetail, userUpdate } =
    templates;
  const {
    requestDetailData,
    approveDetailData,
    positions,
    onClickApproveListItem,
    onClickRequestListItem,
  } = useHomePage();
  const { fetchRequest } = useRequestApi();
  const { fetchGasValue } = useBankApi();
  const { fetchUser, fetchUserList } = useUserApi();
  const { fetchApprove } = useApproveApi();
  const { display, hidden } = positions;

  useEffect(() => {
    fetchRequest();
    fetchUser();
    fetchUserList();
    fetchApprove();
    fetchGasValue();
  }, []);

  return (
    <div className={`${isSafari}`}>
      <HomeHeader />
      <div className="relative">
        <div className={`${home ? display : hidden} h-screen overflow-scroll`}>
          <HomeTemplate
            onClick={onClickRequestListItem}
            requests={requestList}
          />
        </div>

        <div className={`${detail ? display : hidden}`}>
          <DetailTemplate detail={requestDetailData} />
        </div>

        <div className={`${approveDetail ? display : hidden}`}>
          <ApproveDetailTemplate detail={approveDetailData} />
        </div>

        <div className={`${userUpdate ? display : hidden}`}>
          <UserUpdateTemplate />
        </div>

        <div className={`${list ? display : hidden} h-screen overflow-scroll`}>
          <ListTemplate
            onClick={onClickRequestListItem}
            requests={requestList}
          />
        </div>

        <div className={`${request ? display : hidden}`}>
          <RequestTemplate />
        </div>

        <div className={`${approve ? display : hidden}`}>
          <ApproveTemplate
            onClick={onClickApproveListItem}
            approves={approveList}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
