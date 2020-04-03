import dashboardData from '../../json/dashboard.json';

const initialState = {
  dashboardData: { user: [] }
};

const getDashboardData = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DASHBOARD_DATA':
      return Object.assign({}, state, {
        dashboardData: dashboardData
      });

    default:
      return state;
  }
};

export default getDashboardData;