Feature: Register and Login

  Scenario: Register
    Given that I am an anyonumus user
    When I input email id
    And I input password
    When I click submit
    Then It will make a POST request to "http://localhost:7000/createUser"
    Then I should receive valid JSON data