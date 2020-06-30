Feature: DuckDuckGo Search

Scenario: Search for Selenium

    Given I am on DuckDuckGo
    When I type in the search engine "Selenium"
            And I click Submit
        Then I should see link with "Selenium (software) - Wikipedia" text