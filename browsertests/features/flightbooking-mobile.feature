@flight_search_mobile
Feature: Searching from the NEW homepage

  Scenario: Flight search
    Given I visit the home page
    And I enter flight search criteria
    When I search for flights
    Then I can see a 'Select your dates' title