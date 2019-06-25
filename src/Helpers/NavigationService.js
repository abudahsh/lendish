import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
function goBack(){
  _navigator.dispatch(
    NavigationActions.back()
  );
}
function popToTop(){
  _navigator.dispatch(
    StackActions.popToTop()
  )
}
function dispatch(action){
  _navigator.dispatch(
    action
  )
}

// add other navigation functions that you need and export them

export const NavigationService = {
  navigate,
  setTopLevelNavigator,
  goBack,
  popToTop,
  dispatch
};