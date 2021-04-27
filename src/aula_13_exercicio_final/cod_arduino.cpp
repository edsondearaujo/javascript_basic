const int sensorPin = 0; 
float sensorValue;
float voltageOut;
float temperatureK;
float temperatureC;
#define LED_RED 13
#define LED_GREEN 12


void setup() {
  pinMode(sensorPin, INPUT);
  Serial.begin(9600);
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);  
}


void loop() {
  sensorValue = analogRead(sensorPin);
  voltageOut = (sensorValue * 5000) / 1024,0; //milivolts
  
  //calcula a temperatura para LM35 (LM35DZ)
  //temperatureC = voltageOut / 10;
  //temperatureF = (temperatureC * 1.8) + 32;
  
  //calcular a temperatura para LM335
  temperatureK = voltageOut / 10;
  temperatureC = temperatureK - 273,15;
  //temperatureF = (temperatureC * 1.8) + 32;
  
  //calcula a temperatura para LM34
  //temperatureF = voltageOut / 10;
  //temperatureC = (temperatureF - 32.0)*(5.0/9.0);

  if(temperatureC > -15.19){
    digitalWrite(LED_GREEN, LOW);
    digitalWrite(LED_RED, HIGH);
    }else{
      digitalWrite(LED_GREEN, HIGH);
      digitalWrite(LED_RED, LOW);
      }
  
  Serial.print("Temperatura(ºC): ");
  Serial.print(temperatureC);
  
  Serial.print("  Temperatura(ºK): ");
  Serial.print(temperatureK);
  
  Serial.print("  Voltagem(mV): ");
  Serial.println(voltageOut);
  delay(3000);
}