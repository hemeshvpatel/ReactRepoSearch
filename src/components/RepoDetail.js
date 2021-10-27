import React from "react";
import styled, { css } from "styled-components";
import { DivFlexCenter } from "../globals/styles";
import { BiArrowBack } from "react-icons/bi";
import {
  GoStar as StarIcon,
  GoRepoForked as ForkIcon,
  GoEye as WatchIcon,
  GoGist as LanguageIcon,
  GoPerson as UserIcon,
  GoIssueOpened as IssuesIcon,
  GoWatch as UpdatedIcon,
  GoFile as LicenseIcon,
  GoLock as VisibilityIcon,
  // GoRepo as RepoIcon,
  // GoBook as DescriptionIcon,
} from "react-icons/go";
import {
  useLocation,
  useHistory,
  withRouter,
  Redirect,
} from "react-router-dom";

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
    margin: 0;
  `}
`;

const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: space-between;
    background-color: ${theme.colors.secondary};
    padding: 1rem;
    color: ${theme.colors.primary};
  `}
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 2rem;
  margin: auto;
  gap: 1rem;
  width: 75%;
`;

const NameLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailMed = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1rem;
`;
const DetailLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const Buttons = styled(DivFlexCenter)``;

const BackButton = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    border: 2px solid ${theme.colors.secondary};
    border-radius: 10px;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${theme.colors.secondary};

    &:hover {
      background-color: ${theme.colors.tertiary};
    }
  `}
`;

function RepoDetail() {
  const location = useLocation();
  const history = useHistory();
  if (!location.state) {
    return <Redirect to="/error" />;
  }
  const { data, updatedAt } = location.state;
  const {
    name,
    description,
    language,
    stargazers_count,
    forks_count,
    watchers_count,
    open_issues_count,
    license,
    owner,
    visibility,
    svn_url,
  } = data;
  return (
    <Container>
      <Header> Repository Details:</Header>
      <Section>
        <NameLink href={svn_url} target="_blank" rel="noopener noreferrer">
          Name: {name}
        </NameLink>
        <DetailMed>About: {description}</DetailMed>
        <Detail>
          <VisibilityIcon />
          {visibility}
        </Detail>
        <DetailLink
          href={owner.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserIcon />
          {owner.login}
        </DetailLink>
        <Detail>
          <LanguageIcon />
          {language ? language : "n/a"}
        </Detail>
        <Detail>
          <StarIcon />
          {`${stargazers_count} star${stargazers_count && "s"}`}
        </Detail>
        <Detail>
          <ForkIcon />
          {`${forks_count} fork${forks_count && "s"}`}
        </Detail>
        <Detail>
          <WatchIcon />
          {`${watchers_count} follower${watchers_count && "s"}`}
        </Detail>
        <Detail>
          <IssuesIcon />
          {`${open_issues_count} open issue${open_issues_count > 0 ? "" : "s"}`}
        </Detail>
        <Detail>
          <LicenseIcon />
          {license ? license.name : "n/a"}
        </Detail>
        <Detail>
          <UpdatedIcon />
          {updatedAt ? updatedAt : "n/a"}
        </Detail>
      </Section>
      <Buttons>
        <BackButton
          onClick={() => {
            history.goBack();
          }}
        >
          <BiArrowBack />
          Back to Results
        </BackButton>
      </Buttons>
    </Container>
  );
}

export default withRouter(RepoDetail);
