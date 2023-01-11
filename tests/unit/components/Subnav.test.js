import { render, screen } from "@testing-library/vue";

import Subnav from '@/components/TheSubnav.vue'

describe("TheSubnav", () => {
  describe("when user is on job page", () => {
    it("displays job count", () => {
      render(Subnav, {
        data() {
          return {
            onJobResultPage: true,
          };
        }
      });

      const jobCount = screen.getByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      render(Subnav, {
        data() {
          return {
            onJobResultPage: true,
          };
        }
      });

      const jobCount = screen.getByText("1653");

      expect(jobCount).not.toBeInTheDocument();
    })
  })
})