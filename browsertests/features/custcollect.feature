@custcollect
Feature: Customer Collection

  Scenario: Loading the customer collection web page
    Given I have navigated to the customer collection home page
    When I view the page
    Then I can see the list of competitions

  Scenario: Creating a competition
    Given I have loaded the customer collection page
    When I add a new competition
    Then the competition is added to the list of competitions