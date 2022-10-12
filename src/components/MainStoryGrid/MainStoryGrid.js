import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';

    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';

    grid-template-columns: 5fr 4fr 3fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    margin-bottom: revert;
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: solid 1px var(--color-gray-300);
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  
  & > * {
    border-top: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    padding-top: 16px;
    
    &:first-of-type{
      border-top: none;
      padding-top: revert;
    }
  }
`;

const SecondaryStoryList = styled(StoryList)`
  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(
            auto-fill,
            minmax(min(200px, 100%), 1fr)
    );

    & > * {
      border: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: revert;
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    border-top: solid 1px var(--color-gray-300);
    margin-left: 16px;
    margin-top: 16px;
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
