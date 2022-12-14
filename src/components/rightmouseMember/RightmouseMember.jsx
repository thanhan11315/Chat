import React from "react";
import "./RightmouseMember.scss";

function RightmouseMember(props) {
  const dataUserMeInGroup =
    props.dataUserFriend?.members &&
    props.dataUserFriend?.members?.find(
      (member) => member.id_user === props.dataUserMe.id_user
    );

  const newMembersAppointLeader = (members, memberChange) => {
    const newMembers = members?.map((member) => {
      if (member.id_user === memberChange?.id_user) {
        return { ...member, leader: true, deputy: false };
      } else if (member.id_user === props.dataUserMe.id_user) {
        return { ...member, leader: false };
      } else {
        return member;
      }
    });
    return newMembers;
  };

  const newMembersAppoint = (members, memberChange, valueChangeInMember) => {
    const newMembers = members?.map((member) => {
      if (member.id_user === memberChange?.id_user) {
        return { ...member, ...valueChangeInMember };
      } else {
        return member;
      }
    });
    return newMembers;
  };

  const newMembersInvitedOutGroup = (members, memberDelete) => {
    const newMembers = members;
    const indexMemberDelete = members.findIndex(
      (member) => member.id_user === memberDelete.id_user
    );
    newMembers.splice(indexMemberDelete, 1);
    return newMembers;
  };

  const newDataUserFriend = (oldDataUserFriend, newMembers) => {
    return {
      ...oldDataUserFriend,
      members: newMembers,
      status: `${newMembers.length} thành viên`,
    };
  };

  const newDataUserFriends = (dataUserFriends, newDataUserFriend) => {
    const newDataUserFriends = dataUserFriends.map((dataUserFriend) => {
      if (dataUserFriend.id_user === newDataUserFriend.id_user) {
        return newDataUserFriend;
      } else {
        return dataUserFriend;
      }
    });
    return newDataUserFriends;
  };

  const valueChangeInMemberAppointDeputy = { deputy: true };

  const valueChatkInvitedOutGroup = {
    invite_out_group: true,
    recipients: props.dataUserFriend,
    create_date: props.createDateBoxChat(),
    ...props.date,
    id: props.id,
    member_remove: props.dataUserMe,
    member_removed: props.valueRightClickMember,
  };

  // const newValueChats =

  const handleClickAppointLeader = () => {
    const newMembersAppointSave = newMembersAppointLeader(
      props.dataUserFriend.members,
      props.valueRightClickMember
    );
    const newDataUserFriendSave = newDataUserFriend(
      props.dataUserFriend,
      newMembersAppointSave
    );
    const newDataUserFriendsSave = newDataUserFriends(
      props.dataUserFriends,
      newDataUserFriendSave
    );
    props.setDataUserFriend(newDataUserFriendSave);
    props.setDataUserFriendsAll(newDataUserFriendsSave);
  };
  const handleClickAppointDeputyGroup = () => {
    const newMembersAppointSave = newMembersAppoint(
      props.dataUserFriend.members,
      props.valueRightClickMember,
      valueChangeInMemberAppointDeputy
    );
    const newDataUserFriendSave = newDataUserFriend(
      props.dataUserFriend,
      newMembersAppointSave
    );
    const newDataUserFriendsSave = newDataUserFriends(
      props.dataUserFriends,
      newDataUserFriendSave
    );
    props.setDataUserFriend(newDataUserFriendSave);
    props.setDataUserFriendsAll(newDataUserFriendsSave);
  };
  const handleClickInvitedOutGroup = () => {
    const newMembersAppointSave = newMembersInvitedOutGroup(
      props.dataUserFriend.members,
      props.valueRightClickMember
    );
    const newDataUserFriendSave = newDataUserFriend(
      props.dataUserFriend,
      newMembersAppointSave
    );
    const newDataUserFriendsSave = newDataUserFriends(
      props.dataUserFriends,
      newDataUserFriendSave
    );
    console.log(props.dataUserFriends);
    props.setDataUserFriend(newDataUserFriendSave);
    props.setDataUserFriendsAll(newDataUserFriendsSave);
    props.setValueChatsInRenderAllMessage(valueChatkInvitedOutGroup);
  };

  return (
    <>
      <div className="rightmouse-member">
        {props.dataUserMe?.id_user !== props.valueRightClickMember?.id_user && (
          <>
            {dataUserMeInGroup?.leader && (
              <div className="box-rightmouse-member">
                <div
                  className="select-element"
                  onClick={handleClickAppointLeader}
                >
                  Chuyển quyền trưởng nhóm
                </div>
                {!props.valueRightClickMember?.deputy && (
                  <div
                    className="select-element"
                    onClick={handleClickAppointDeputyGroup}
                  >
                    Bổ nhiệm làm phó nhóm
                  </div>
                )}
                <div className="line" />
                <div
                  className="select-element"
                  style={{ color: "#730e0e" }}
                  onClick={handleClickInvitedOutGroup}
                >
                  Mời ra khỏi nhóm
                </div>
              </div>
            )}
            {dataUserMeInGroup?.deputy &&
              !props.valueRightClickMember?.deputy &&
              !props.valueRightClickMember?.leader && (
                <div className="box-rightmouse-member">
                  <div className="line" />
                  <div
                    className="select-element"
                    style={{ color: "#730e0e" }}
                    onClick={handleClickInvitedOutGroup}
                  >
                    Mời ra khỏi nhóm
                  </div>
                </div>
              )}
          </>
        )}
      </div>
    </>
  );
}

export default RightmouseMember;
