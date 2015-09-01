@flight_search_old
Feature: Searching from the OLD homepage

  Scenario: Flight search via desktop
    Given I visit the home page
    And I enter flight search criteria
    When I search for flights
    Then I can see a 'Select your dates' title

  Scenario: Flight search via tablet
    Given I visit the home page on a tablet device
    And I enter flight search criteria
    When I search for flights
    Then I can see a 'Select your dates' title