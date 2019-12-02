/**
 * __description__
 *
 * @package __name__
 * @author __author__ <__email__>
 * @note __THIS_WILL_BE_IGNORED__
 */
 
/**
 * Init
 */
int led = 13;

/**
 * Setup
 */
void setup() {                
  // Initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}

/**
 * Loop
 */
void loop() {
  digitalWrite(led, HIGH);   // Turn the LED on (HIGH is the voltage level)
  delay(1000);               // Wait for a second
  digitalWrite(led, LOW);    // Turn the LED off by making the voltage LOW
  delay(1000);               // Wait for a second
}
