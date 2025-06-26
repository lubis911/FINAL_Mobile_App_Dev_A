import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Car wash</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.heroTextSection}>
        <Text style={styles.heroTitle}>
          <Text style={styles.shine}>Shine</Text>
          <Text style={styles.hub}>Hub</Text> Car &amp; Motorcycle Wash
        </Text>
        <Text style={styles.heroDesc}>
          Enjoy the sensation of a spotless, shiny car—top-quality care for your
          vehicle every time.
        </Text>

        <TouchableOpacity style={styles.learnMoreBtn}>
          <Text style={styles.learnMoreText}>Learn More →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookingBtn}>
          <Text style={styles.bookingText}>BOOKING NOW</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Image */}
      <View style={styles.imageSection}>
        <Image
          source={require('../../assets/car.png')}
          style={styles.carImage}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/bike.png')}
          style={styles.bikeImage}
          resizeMode="contain"
        />
      </View>

      {/* Taglines */}
      <View style={styles.taglineSection}>
        <Text style={styles.tagline}>More Than a Wash, It's Full Care!</Text>
        <Text style={styles.tagline}>Maximum Clean, Total Shine!</Text>
        <Text style={styles.tagline}>Quick Service, Gleaming Vehicles!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#000',
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: '#FFA500',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  heroTextSection: {
    padding: 20,
    backgroundColor: '#000',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  shine: {
    color: '#fff',
  },
  hub: {
    color: '#FFA500',
  },
  heroDesc: {
    color: '#ddd',
    marginTop: 10,
  },
  learnMoreBtn: {
    backgroundColor: '#ccc',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  learnMoreText: {
    color: '#000',
  },
  bookingBtn: {
    backgroundColor: '#FFA500',
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookingText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  carImage: {
    width: 180,
    height: 100,
  },
  bikeImage: {
    width: 120,
    height: 100,
  },
  taglineSection: {
    alignItems: 'center',
    padding: 20,
  },
  tagline: {
    fontStyle: 'italic',
    marginVertical: 4,
    textAlign: 'center',
  },
});
