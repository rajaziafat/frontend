import React from "react";
import { Issue, ManagedIssueState } from "src/model";
// import { ButtonSize, ButtonType, ExternalLinkButton, LinkButton } from "src/components";
// import { Audience } from "src/views";
import { fundIssuePath } from "src/App";
// import { DeveloperButton, SecondaryDeveloperButton } from "../Buttons/Buttons";
import { Button } from "../elements/Button";
import { Link } from "react-router-dom";

interface ActionProps {
  issue: Issue;
  state?: ManagedIssueState;
  successfullyFunded: boolean;
}

export function Action(props: ActionProps) {
  console.log(props.successfullyFunded);
  const actOnIssueButton = (
    <>
      {/* <LinkButton
        linkProps={{ to: fundIssuePath(props.issue.id.repositoryId.ownerId.login, props.issue.id.repositoryId.name, props.issue.id.number) }}
        buttonProps={{
          htmlButtonProps: { children: "ACT ON ISSUE" },
          type: props.successfullyFunded ? ButtonType.SECONDARY : ButtonType.PRIMARY,
          audience: Audience.DEVELOPER,
          size: ButtonSize.MEDIUM,
        }}
      /> */}
      <Button variant={props.successfullyFunded ? "SECONDARY_DEVELOPER" : "PRIMARY_DEVELOPER"} size="MEDIUM" asChild>
        <Link to={fundIssuePath(props.issue.id.repositoryId.ownerId.login, props.issue.id.repositoryId.name, props.issue.id.number)}>
          <span className="relative z-20">ACT ON ISSUE</span>
        </Link>
      </Button>
    </>

    // <>
    //   {props.successfullyFunded ? (
    //     <DeveloperButton
    //       className="w-52"
    //       path={fundIssuePath(props.issue.id.repositoryId.ownerId.login, props.issue.id.repositoryId.name, props.issue.id.number)}
    //       title="ACT ON ISSUE"
    //     />
    //   ) : (
    //     <SecondaryDeveloperButton
    //       className="w-52"
    //       path={fundIssuePath(props.issue.id.repositoryId.ownerId.login, props.issue.id.repositoryId.name, props.issue.id.number)}
    //       title="ACT ON ISSUE"
    //     />
    //   )}
    // </>

    // <DeveloperButton className="" path="" title="ACT ON ISSUE" />
  );

  if (!props.state) {
    return actOnIssueButton;
  } else if (props.state === ManagedIssueState.OPEN) {
    return (
      <>
        {actOnIssueButton}

        {props.successfullyFunded && (
          <>
            {/* <ExternalLinkButton
              href={props.issue.htmlUrl}
              buttonProps={{
                htmlButtonProps: { children: "ACT ON GITHUB" },
                type: props.successfullyFunded ? ButtonType.PRIMARY : ButtonType.SECONDARY,
                size: ButtonSize.MEDIUM,
                audience: Audience.DEVELOPER,
              }}
            /> */}
            <Button variant={props.successfullyFunded ? "SECONDARY_DEVELOPER" : "PRIMARY_DEVELOPER"} size="MEDIUM" asChild>
              <Link to={props.issue.htmlUrl}>
                <span className="relative z-20">ACT ON GITHUB</span>
              </Link>
            </Button>
          </>
        )}

        {/* {props.successfullyFunded ? (
          <SecondaryDeveloperButton className="w-52" path={props.issue.htmlUrl} title="ACT ON GITHUB" />
        ) : (
          <DeveloperButton className="w-52" path={props.issue.htmlUrl} title="ACT ON GITHUB" />
        )} */}
      </>
    );
  } else if (props.state === ManagedIssueState.REJECTED || props.state === ManagedIssueState.SOLVED) {
    return (
      <div>
        <h3 className="px-md-5 italic underline">Closed</h3>
      </div>
    );
  } else {
    return <> </>;
  }
}
