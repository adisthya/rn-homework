import { StyleSheet } from 'react-native';

export default sharedStyles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: 'teal',
    borderRadius: 5,
    margin: 10
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    padding: 20,
    fontWeight: 'bold',
  },
  prosesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  listItems: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  listItemImage: {
    height: 48,
    width: 48,
    margin: 0,
    marginRight: 10
  },
  textJudul: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
  },
  textCompany: {
    fontSize: 14,
    marginBottom: 5
  },
  textAddress: {
    color: '#333333'
  },
})
