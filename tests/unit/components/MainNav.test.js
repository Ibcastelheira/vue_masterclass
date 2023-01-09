import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Nav Careers")
    expect(companyName).toBeInTheDocument();
  });

  it("display items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuText = navigationMenuItems.map((item) => item.textContent);
    console.log("navigationMenuText: ", navigationMenuText)

    expect(navigationMenuText).toEqual([ 'Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs' ])
  })
});
