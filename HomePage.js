import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  AppState,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserAction} from './Redux/action';
import DataItem from './TextCommonData';
import colors from './Colors';
import fontSize from './fontSize';
import CustomButton from './CustomButton';
import { navigate } from './RootNavigatation';
import Fonts from './Fonts/fonts';
import { useTheme } from '@react-navigation/native';
import { AppContext } from './themes/AppContext';


 function HomePage(){
  const {colors} = useTheme()
  const{isDarkTheme,setIsDarkTheme}= React.useContext(AppContext)

const [search, setSearch] = useState('');

  const user = useSelector(state => state.user);

  const {usersData} = user;

  const dispatch = useDispatch();

  const searchUser = () => {
    dispatch(fetchUserAction(search));
  };

  useEffect(() => {
    searchUser();
  }, [search]);

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <View style={styles.textContainer}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text
            style={[{
              fontSize: fontSize.heading,
              color: colors.Black,
              fontWeight: '500',
              fontFamily:Fonts.italic
            },{color:colors.text}]}>
            Api Data
          </Text>
        </View>
      </View>

      <CustomButton
        onPress={() => navigate('ShowData')}
        title="Get Data"
        color="black"
      />
      <CustomButton
        onPress={() =>navigate('PostMethod')}
        title="Post Method"
        color="green"
      />
      <FlatList
        data={usersData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          // console.log( item);

          return (
            <View style={{flex: 1}}>
              <View style={styles.container}>
                <DataItem label="Movie" value={item.movie} />
                <DataItem label="Rating" value={item.rating} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    margin: 10,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  container: {
    backgroundColor: colors.formBackgroundColor,
    margin: 10,
    padding: 20,
    gap: 10,
    borderRadius: 20,
    borderColor: colors.Black,
    borderWidth: 1,
  },
});

export default HomePage;
