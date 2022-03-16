import React from 'react';
import { View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'components';
import { loginActions } from 'store/actions';
import { loginStyles } from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('0989018437', '123123'));
  const isLoginLoading = useSelector(state => state.loadingReducer.isLoginLoading);

  return (
    <View style={loginStyles.container}>
      <Input variant="rounded" placeholder="Số điện thoại hoặc Email" />
      <Input variant="rounded" placeholder="Password" />
      <Button onPress={onLogin} isLoading={isLoginLoading}>
        Đăng nhập
      </Button>
    </View>
  );
};

export default Login;
