@hotels
Feature: Hotels

  Scenario: Hotels page loads successfully
    Given I have navigated to the hotels page
    When the page loads
    Then I can see the accommodation options

  Scenario: Hotels search
    Given I have entered hotel search criteria
    When I search for hotels
    Then the search results match my search criteria