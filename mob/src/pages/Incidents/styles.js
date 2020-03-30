import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#0D0D0D',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
        color:'#e02041',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#F0F0F2',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380', 
        fontWeight: 'bold'       
    },

    incidentList: {
        marginTop: 32,
        backgroundColor: '#0D0D0D',
    },

    incident: {
        padding: 24,
        borderRadius: 12,
        backgroundColor: '#595959',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#DEDEDE',
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    detailsButtonText:{
        color:'#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },

});
