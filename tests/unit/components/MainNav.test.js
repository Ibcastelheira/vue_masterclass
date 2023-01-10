import MainNav from "@/components/MainNav.vue";

import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Nav Careers");

    expect(companyName).toBeInTheDocument();
  });

  it("display items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuText = navigationMenuItems.map((item) => item.textContent);

    expect(navigationMenuText).toEqual([ 'Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs' ])
  });

  describe("when the user logs in", () => {
    it("display user profile picture", async () => {
      render(MainNav);

      let profileImage = screen.queryByRole("img", {
        name: /User Profile Image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /Sign In/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.queryByRole("img", {
        name: /User Profile Image/i,
      });
      expect(profileImage).toBeInTheDocument();
    })
  });
});
